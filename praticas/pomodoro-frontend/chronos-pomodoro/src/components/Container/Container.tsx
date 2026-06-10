import React, { Children, type ReactNode } from 'react';
import styles from './Container.module.css';

type ContainerProps = {
  children: ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
