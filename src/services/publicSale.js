import api from './index';

export const getPublicSalesApi = async () => {
  try {
    const {
      data: { publicSales }
    } = await api.get('/public-sale');
    return publicSales;
  } catch (error) {
    throw error;
  }
};

export const getPublicSaleApi = async id => {
  try {
    const {
      data: { publicSale }
    } = await api.get(`/public-sale/${id}`);
    return publicSale;
  } catch (error) {
    throw error;
  }
};

export const createPublicSaleApi = async publicSale => {
  try {
    await api.post('/public-sale', publicSale);
    return;
  } catch (error) {
    throw error;
  }
};

export const sendBidApi = async (bid, publicSaleId) => {
  try {
    await api.post(`/public-sale/bid/${publicSaleId}`, bid);
    return;
  } catch (error) {
    throw error;
  }
};

export const closePublicSaleApi = async publicSaleId => {
  try {
    const {
      data: { publicSale }
    } = await api.patch(`/public-sale/close/${publicSaleId}`);
    return publicSale;
  } catch (error) {
    throw error;
  }
};

export const chooseBidApi = async (publicSaleId, bidId) => {
  try {
    const {
      data: { publicSale }
    } = await api.patch(`/public-sale/bid/choose/${publicSaleId}/${bidId}`);
    return publicSale;
  } catch (error) {
    throw error;
  }
};
