/**
 * Formatting utilities module.
 **/

// For formatting dollar amounts
const formatter = new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' });

export const formatCurrency = (amount: number) => {
  return formatter.format(amount);
};

// For formatting categories
export const formatCategory = (category: string) => {
  return category.replace(/_/g, ' ');
};
