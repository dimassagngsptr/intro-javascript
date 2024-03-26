const vouchers = [
   {
      voucher_code: "PIJARFOOD5",
      minimum_spent: 50000,
      percentage_discount: 50,
      maximum_discount: 50000,
   },
   {
      voucher_code: "DITRAKTIRPIJAR",
      minimum_spent: 25000,
      percentage_discount: 60,
      maximum_discount: 30000,
   },
];

const pijarFoods = (price, voucher, distance, tax, cash) => {
   let subTotal = 0;
   let shipmentFee = 2500;
   let discount = 0;
   let taxFee = 0;
   const purchase = price;
   const payment = cash;
   if (tax) {
      taxFee = (price * 5) / 100;
   }
   if (distance >= 2) {
      shipmentFee = 5000;
      let shipment = distance - 2;
      if (shipment) {
         shipmentFee += shipment * 3000;
      }
   }

   if (!voucher) {
      subTotal = price + shipmentFee + taxFee;
   } else {
      const isExist = vouchers?.find((item) => item?.voucher_code === voucher);
      if (!isExist) {
         return "Voucher not found";
      }
      if (price < isExist?.minimum_spent) {
         return "Your purchase does not meet the minimum purchase requirements";
      }
      
      discount = (price * isExist?.percentage_discount) / 100;
      if (discount > isExist?.maximum_discount) {
         discount = isExist?.maximum_discount;
         price -= isExist?.maximum_discount;
         subTotal = price + shipmentFee + taxFee;
      } else {
         price -= discount;
         subTotal = price + shipmentFee + taxFee;
      }
   }
   if (cash < subTotal) {
      return "Your have less money";
   }
   const change = cash - subTotal;

   return `
         PIJAR FOODS
   =======================
   Harga             ${purchase}
   Potongan         (${discount})
   Biaya Antar       ${shipmentFee}
   ========================
   Pajak 5%          ${taxFee}
   ========================
   Subtotal          ${subTotal}
   Cash              ${payment}
   ========================
   Kembalian         ${change}
   `;
};

console.log(pijarFoods(75000, "PIJARFOOD5", 5, true, 89000));
