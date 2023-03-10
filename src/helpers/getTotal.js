const getTotal = (items) => {
  const total = items.reduce((total, item) => {
    if (item && item?.quantity) {
      return total + item.quantity * Number(item.price.slice(1));
    }
    return total;
  }, 0);
  return total;
}

export { getTotal };