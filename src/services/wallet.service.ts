import prisma from '../prisma/prisma';

export const addMoney = async (userId: string, amount: number) => {
    await prisma.wallet.update({
        where: { userId },
        data: { balance: { increment: amount } },
    });

    return prisma.transaction.create({
        data: { type: 'MONEY_LOADED', amount, userId },
    });
};

export const sendMoney = async (senderId: string, { amount, receiverPhone }:{amount:number,receiverPhone:string}) => {
    const senderWallet = await prisma.wallet.findUnique({ where: { userId: senderId } });
    if (senderWallet!.balance < amount) throw new Error('Insufficient balance');

    const receiver = await prisma.user.findUnique({ where: { phone: receiverPhone } });
    if (!receiver) throw new Error('Receiver not found');

    const transaction = await prisma.$transaction([
        prisma.wallet.update({
            where: { userId: senderId },
            data: { balance: { decrement: amount } },
        }),
        prisma.wallet.update({
            where: { userId: receiver.id },
            data: { balance: { increment: amount } },
        }),
        prisma.transaction.create({
            data: { type: 'MONEY_SENT', amount, userId: senderId, receiverId: receiver.id },
        }),
        prisma.transaction.create({
            data: { type: 'MONEY_RECEIVED', amount, userId: receiver.id, senderId },
        }),
    ]);

    return transaction;
};
