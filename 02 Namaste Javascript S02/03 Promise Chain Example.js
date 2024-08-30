let cart = [
    {
        itemName: "Shoes",
        itemPrice: 550
    },
    {
        itemName: "Pant",
        itemPrice: 600
    },
    {
        itemName: "Shirt",
        itemPrice: 650
    }
];

let myWallet = 5000;

function createOrder(cart) {
    console.log("Order on prcoess..")

    let myPromise = new Promise(function (resolve, reject) {
        if (validCheck(cart)) {
            setTimeout(function () {
                resolve({ orderId: 1234, totalCost: 1800, myOrder: cart });
            }, 3000);
        } else {
            let err = new Error("Cart is not valid. Buy Something");
            reject(err);
        }
    });
    return myPromise;
}

function proceedToPayment(orderDetails) {
    console.log("Payment being processed..");

    return new Promise(function (resolve, reject) {
        if (myWallet >= orderDetails.totalCost) {
            setTimeout(function () {
                resolve({ paymentStatus: 1, myMessage: `Payment ${orderDetails.totalCost} taka is successfull for order ID: ${orderDetails.orderId}` });
            }, 3000);
        } else {
            let err = new Error("Balance is low");
            reject(err);
        }
    });
}

function showOrderSummary(orderHistory) {
    console.log("Showing Summary..");

    return new Promise(function (resolve, reject) {
        let myCart = cart;
        if (orderHistory.paymentStatus == 1) {
            setTimeout(function () {
                resolve({ payment: "Success", orderedItem: myCart });
            }, 2000);
        } else {
            let err = new Error("Payment Issues")
            reject(err);
        }
    });
}

function updateWallet(finalStatus) {
    console.log("Wallet being updated..");

    return new Promise(function (resolve, reject) {
        if (finalStatus.payment == "Success") {
            let orderAmount = 1800;
            myWallet = myWallet - orderAmount;
            setTimeout(function () {
                resolve({ currBalance: myWallet, myMessage: "Wallet is updated." });
            }, 2000);

        } else {
            let err = new Error("Wallet Balance not updated.")
            reject(err);
        }
    });
}

function validCheck(cart) {
    if (cart.length >= 1) return true;
    else return false;
}

createOrder(cart)
    .then(function (orderDetails) {
        return orderDetails;
    })
    .then(function (orderDetails) {
        return proceedToPayment(orderDetails);
    })

    .then(function (paymentCondition) {
        console.log(paymentCondition.myMessage);
        return paymentCondition;
    })

    .then(function (paymentCondition) {
        return showOrderSummary(paymentCondition)
    })
    .then(function (summary) {
        let outputt = summary.orderedItem.map((x) => x.itemName + " " + x.itemPrice);
        console.log(outputt)

        return summary;
    })
    .then(function (finalStatus) {
        return updateWallet(finalStatus);
    })
    .then(function (finalStatus) {
        console.log(finalStatus.myMessage);
        console.log(`Current Balance: ${finalStatus.currBalance}`);
    })
    .catch(function (err) {
        console.log(err.message);
    })
