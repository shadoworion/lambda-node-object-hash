import gen from "shadoworion-test-hasher-package";

export const handler = async () => {
  try {
    const data = {
      buyAmount: 300,
      buyCurrency: "BTC",
      sellAmount: null,
      sellCurrency: null,
      feeAmount: 2,
      feeCurrency: "BTC",
      idHash: null,
      date: 1732784760000,
      accountId: "7c9fc8fc-4d1e-4cca-9154-34e32d055138",
    };
    const hash = gen(data);

    console.log(hash);

    return hash;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// handler();
