import { pmcApiGatewayUrl } from './index'
const baseHeader = {
    'Content-Type': 'application/json'
}

const multipartFormHeader = {
    'Content-Type': 'multipart/form-data'
}

const apiConfig = {
    account: {
        getOtp: {
            path: `${pmcApiGatewayUrl}customers/login/phone/otp`,
            method: 'POST',
            headers: baseHeader
        },
        login: {
            path: `${pmcApiGatewayUrl}customers/login/phone/submit`,
            method: 'POST',
            headers: baseHeader
        },
        register: {
            path: `${pmcApiGatewayUrl}customers/register/otp`,
            method: 'POST',
            headers: baseHeader
        },
        forgotPassword: {
            path: `${pmcApiGatewayUrl}customers/forgot-password/otp`,
            method: 'POST',
            headers: baseHeader
        },
        order: {
            getList: {
                path: `${pmcApiGatewayUrl}erp/order-info`,
                method: 'GET',
                headers: baseHeader
            },
            getOrderDetail: {
                path: `${pmcApiGatewayUrl}erp/order-by-order-number`,
                method: 'GET',
                headers: baseHeader
            },
            getOrderSummaryStatus: {
                path: `${pmcApiGatewayUrl}erp/get-order-summary-status`,
                method: 'GET',
                headers: baseHeader
            },
            cancelOrder: {
                path: `${pmcApiGatewayUrl}customers/cancel-order`,
                method: 'PUT',
                headers: baseHeader
            }
        },

        coupon: {
            getList: {
                path: `${pmcApiGatewayUrl}customers/vouchers`,
                method: 'GET',
                headers: baseHeader
            },
            getUsed: {
                path: `${pmcApiGatewayUrl}customers/vouchers/used`,
                method: 'GET',
                headers: baseHeader
            },
            getExpire: {
                path: `${pmcApiGatewayUrl}customers/vouchers/expire`,
                method: 'GET',
                headers: baseHeader
            }
        },
        address: {
            billingAddress: {
                get: {
                    path: `${pmcApiGatewayUrl}api/v1/`,
                    method: 'GET',
                    headers: baseHeader
                },
                update: {
                    path: `${pmcApiGatewayUrl}api/v1/`,
                    method: 'PUT',
                    headers: baseHeader
                }
            },
            shippingAddress: {
                get: {
                    path: `${pmcApiGatewayUrl}api/v1/`,
                    method: 'GET',
                    headers: baseHeader
                },
                update: {
                    path: `${pmcApiGatewayUrl}api/v1/`,
                    method: 'PUT',
                    headers: baseHeader
                }
            }
        },
        loveList: {
            path: `${pmcApiGatewayUrl}api/v1/`,
            method: 'GET',
            headers: baseHeader
        },
        logout: {
            path: `${pmcApiGatewayUrl}api/v1/`,
            method: 'GET',
            headers: baseHeader
        },
        getProfile: {
            path: `${pmcApiGatewayUrl}customers/auth/me`,
            method: 'GET',
            headers: baseHeader
        },
        updateProfile: {
            path: `${pmcApiGatewayUrl}customers/auth/me`,
            method: 'PUT',
            headers: baseHeader
        },
        uploadAvatar: {
            path: `${pmcApiGatewayUrl}customers/auth/me/avatar`,
            method: 'POST',
            headers: multipartFormHeader
        },
        getExtracareInfo: {
            path: `${pmcApiGatewayUrl}erp/extracare-info`,
            method: 'GET',
            headers: baseHeader
        }
    },
    main: {
        getData: {
            path: `${pmcApiGatewayUrl}ecommerce/main`,
            method: 'GET',
            headers: baseHeader
        }
    },
    category: {
        getList:{
            path: `${pmcApiGatewayUrl}api/categories`,
            method: 'GET',
            headers: baseHeader
        },
        getListByBrand:{
            path: `${pmcApiGatewayUrl}api/categories`,
            method: 'GET',
            headers: baseHeader
        }
        // categories?sort_by=NAME&order_by=DESC&ids=Q2F0ZWdvcnk6Mw==,Q2F0ZWdvcnk6OA==&page=1&page_size=200
    },
    collection: {
        getProducts: {
            path: `${pmcApiGatewayUrl}api/collection`,
            method: 'GET',
            headers: baseHeader
        },
    },
    home: {
        getList: {
            path: `${pmcApiGatewayUrl}ecommerce/home`,
            method: 'GET',
            headers: baseHeader
        },
        registerPromotion:{
            path: `${pmcApiGatewayUrl}api/customer/promo-email`,
            method: 'POST',
            headers: baseHeader
        },
        getFlashSale:{
            path: `${pmcApiGatewayUrl}app/api/config`,
            method: 'GET',
            headers: baseHeader
        },
        getCollectionFlashSale: {
            path: `${pmcApiGatewayUrl}api/collection-flashsale`,
            method: 'GET',
            headers: baseHeader
        },
    },
    product: {
        getDetail: {
            path: `${pmcApiGatewayUrl}api/product`,
            method: 'GET',
            headers: baseHeader
        },
        getAll: {
            path: `${pmcApiGatewayUrl}api/products`,
            method: 'GET',
            headers: baseHeader
        },
        getByCategory: {
            path: `${pmcApiGatewayUrl}api/category`,
            method: 'GET',
            headers: baseHeader
        },

        searchProduct: {
            path: `${pmcApiGatewayUrl}api/search-product`,
            method: 'GET',
            headers: baseHeader
        },
        searchHistory: {
            path: `${pmcApiGatewayUrl}api/search-history`,
            method: 'GET',
            headers: baseHeader
        },
        searchResult: {
            path: `${pmcApiGatewayUrl}api/search-result`,
            method: 'GET',
            headers: baseHeader
        },
    },
    area: {
        getListProvinces: {
            path: `${pmcApiGatewayUrl}/provinces`,
            method: 'GET',
            headers: baseHeader
        },
        getDistrictList: {
            path: `${pmcApiGatewayUrl}/districts`,
            method: 'GET',
            headers: baseHeader
        },
        getWardList: {
            path: `${pmcApiGatewayUrl}/wards`,
            method: 'GET',
            headers: baseHeader
        },
    },
    store:{
        getListStores: {
            path: `${pmcApiGatewayUrl}/all_open_stores`,
            method: 'GET',
            headers: baseHeader
        },
        getStoresNearMe: {
            path: `${pmcApiGatewayUrl}oms/api/stores/find_nearby`,
            method: 'GET',
            headers: baseHeader
        },
        getTotalCountStore :{
            path: `${pmcApiGatewayUrl}open_stores`,
            method: 'GET',
            headers: baseHeader
        },
    },
    checkout: {
        getData: {
            path: `${pmcApiGatewayUrl}api/user/checkout`,
            method: 'GET',
            headers: baseHeader
        },
        create: {
            path: `${pmcApiGatewayUrl}api/checkout`,
            method: 'POST',
            headers: baseHeader
        },
        update: {
            path: `${pmcApiGatewayUrl}api/checkout`,
            method: 'PUT',
            headers: baseHeader
        },
        updateShippingAddress: {
            path: `${pmcApiGatewayUrl}api/checkout/shipping-address`,
            method: 'PUT',
            headers: baseHeader
        },
        complete: {
            path: `${pmcApiGatewayUrl}api/checkout/complete_merge`,
            method: 'PUT',
            headers: baseHeader
        },
        addLineCart: {
            path: `${pmcApiGatewayUrl}api/checkout/line`,
            method: 'POST',
            headers: baseHeader
        },
        updateLineCart: {
            path: `${pmcApiGatewayUrl}api/checkout/line`,
            method: 'PUT',
            headers: baseHeader
        },
        deleteLineCart: {
            path: `${pmcApiGatewayUrl}api/checkout/line`,
            method: 'DELETE',
            headers: baseHeader
        },

        shippingEstimateFee: {
            path: `${pmcApiGatewayUrl}shipping/estimate-fee`,
            method: 'GET',
            headers: baseHeader
        },
        deleteCheckout: {
            path: `${pmcApiGatewayUrl}api/checkout/line/delete-all`,
            method: 'DELETE',
            headers: baseHeader
        },
    },
    page:{
        getResultPage: {
            path: `${pmcApiGatewayUrl}api/v1/page`,
            method: 'GET',
            headers: baseHeader
        }
    },
    order:{
        getByToken: {
            path: `${pmcApiGatewayUrl}api/order`,
            method: 'GET',
            headers: baseHeader
        },
        getOrderDetailsByErpNo: {
            path: `${pmcApiGatewayUrl}/api/order`,
            method: 'GET',
            headers: baseHeader
        }
    },
    brand:{
        getListBrand:{
            path: `${pmcApiGatewayUrl}api/brands/full-info`,
            method: 'GET',
            headers: baseHeader
        },
        getBrandDetail:{
            path: `${pmcApiGatewayUrl}api/brand-details-by-code`,
            method: 'GET',
            headers: baseHeader
        }

    },
    voucher: {
        list:{
            path: `${pmcApiGatewayUrl}api/vouchers`,
            method: 'GET',
            headers: baseHeader
        },
        search:{
            path: `${pmcApiGatewayUrl}api/voucher-by-code`,
            method: 'GET',
            headers: baseHeader
        }
    },
    payment: {
        methodList:{
            path: `${pmcApiGatewayUrl}payment/method`,
            method: 'GET',
            headers: baseHeader
        }
    },
}

export default apiConfig;
