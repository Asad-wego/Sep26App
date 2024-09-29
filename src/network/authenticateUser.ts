/*
 * Created by Asad on 28 Sep 2024
 */

import {users} from '../data/mockData';

export const authenticateUser = (
  username: string,
  password: string,
): User | undefined => {
  return users.find(
    user => user.username === username && user.password === password,
  );
};
