import React from 'react';
import { RouteComponentProps } from 'react-router';

const UserPage = ({ match }: RouteComponentProps<{ username: string }>): JSX.Element => {
  const { username } = match.params;
  return (
    <div>
      <svg id='dummy' />
      <code>{ username }</code>
    </div>
  );
};

export default UserPage;
