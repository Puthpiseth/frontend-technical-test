import { AxiosResponse } from 'axios';
import { User } from '../types/user';
import axiosInstance from './request.api';

export const getUsers = (): Promise<AxiosResponse<User[]>> => axiosInstance.get('/users');
