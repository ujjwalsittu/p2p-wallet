import prisma from '../prisma/prisma';

export const completeKYC = async (userId: string | undefined, {aadhaar, pan, name}: any) => {
    return prisma.user.update({
        where: { id: userId },
        data: { name,aadhaar, pan, kycCompleted: true },
    });
};
