export const MAX_NUMBER_LENGTH = 3;
export const MAX_OPERATOR_LENGTH = 1;

export const ERROR_MASSAGES = {
  INVALID_LENGTH: `숫자는 ${MAX_NUMBER_LENGTH}개가 최대에요`,
  INVALID_OPERATOR_LENGTH: `${
    MAX_OPERATOR_LENGTH + 1
  }개의 숫자에 대해서만 가능해요`,
  REQUIRED_DIGIT: "숫자를 먼저 입력해주세요",
};
