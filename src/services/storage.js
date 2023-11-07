import fake_data from "../data/shop_data.json";

const StorageService = {
    getAll: function() {
        return fake_data.products
    },

    getById: function(id) {
        let products = fake_data.products
        const finddata = products.find((row) => row.id === parseInt(id));
        return finddata
    }
};

export default StorageService;