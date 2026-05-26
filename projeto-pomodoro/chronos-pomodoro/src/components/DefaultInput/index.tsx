import React from 'react';

type DefaultInputProps = {
  id: string;
} & React.ComponentProps<'input'>;

// Desestruturamos apenas o id e o type por enquanto
export function DefaultInput({ id, type }: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>task</label>
      <input id={id} type={type} />
    </>
  );
}
