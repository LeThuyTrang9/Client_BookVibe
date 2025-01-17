export const formatCurrency = (price) => {
  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  return formatter.format(price).replace("₫", "VNĐ");
};