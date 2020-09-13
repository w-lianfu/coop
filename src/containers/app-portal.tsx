import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface IProps extends RouteComponentProps {
  history: any;
}
interface IState {}

const AppPortal = (props: IProps, state: IState) => {
  return (
    <p>Portal...</p>
  );
};

export default AppPortal;
