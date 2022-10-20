import { InputProps } from "../Input";

type LoadingInputProps = {
  isLoading: boolean;
} & InputProps;

export const LoadingInput = (
  Input: (inputProps: InputProps) => JSX.Element
) => {
  return (loadingInputProps: LoadingInputProps) => {
    const { isLoading, ...inputProps } = loadingInputProps;

    if (isLoading) {
      return (
        <Input
          style={{ opacity: "0.1" }}
          disabled={true}
          placeholder="loading"
          {...inputProps}
        />
      );
    }

    return <Input {...inputProps} />;
  };
};
