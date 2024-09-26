import prisma from '../prisma/prisma';

export const getTransactions = async (userId: string) => {
    return prisma.transaction.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
    });
};
