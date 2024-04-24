export function useCardNumberInput (inputWrapperRef: Ref<any>) {
  const cardNumber = ref('');
  const cardLogo = computed(() => getCardLogo(cardNumber.value));

  function updateCardNumber (event: string) {
    const onlyDigits = event.replace(/\D/g, '');
    const formattedNumber = onlyDigits
      .replace(/\s/g, '')
      .replace(/(\d{4})(?=\d)/g, '$1 ');

    cardNumber.value = formattedNumber.length <= 16 ? formattedNumber : formattedNumber.slice(0, 19);
    inputWrapperRef.value.$refs.inputRef.value = cardNumber.value;
  }

  function resetCardNumber () {
    cardNumber.value = '';
  }

  const isCardValid = computed(() => cardNumber.value.length === 19 && !!cardLogo.value);

  return {
    cardNumber, cardLogo, updateCardNumber, isCardValid, resetCardNumber,
  };
}
