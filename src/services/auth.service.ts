import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../prisma/prisma';

const JWT_SECRET: string = process.env.JWT_SECRET!;

// Signup function allowing optional email and password
export const signup = async ({ email, phone, password }: { email?: string; phone: string; password?: string }) => {
    // Hash the password only if it's provided
    const hashedPassword = password ? await bcrypt.hash(password, 10) : null;

    return prisma.user.create({
        data: {

            email: email || null, // Set to null if not provided
            phone,
            password: hashedPassword, // Include only if provided
            wallet: {
                create: { balance: 0 },
            },
        },
    });
};

// Login function allowing login via phone number
export const login = async ({ phone, password }: { phone: string; password?: string }) => {
    // Find user by phone number
    const user = await prisma.user.findUnique({ where: { phone } });

    // If user doesn't exist or password is provided but does not match, throw error
    if (!user || (password && !(await bcrypt.compare(password!, user.password!)))) {
        throw new Error('Invalid credentials');
    }

    // Sign JWT token with user ID
    return jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
};
