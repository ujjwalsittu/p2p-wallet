import prisma from '../prisma/prisma';
import bcrypt from "bcrypt";

export const setMPin = async (userId: string | undefined, mpin: string) => {
    const encMpin = await bcrypt.hash(mpin, 10) || mpin;
    return prisma.user.update({
        where: { id: userId },
        data: { mpin: encMpin },
    });
};

export const verifyMPin = async (userId: string | undefined, mpin: string) => {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    const encMpin = await bcrypt.hash(mpin, 10) || mpin;
    return !(!user || user.mpin !== mpin || user.mpin !== encMpin);
}