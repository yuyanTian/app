import { SELF_QUERY } from './../query/User/SelfQuery';
import { useQuery } from '@apollo/client';
import { SelfQueryDataProps } from '../types/auth';

export const useAuth = () => {
    return useQuery<SelfQueryDataProps>(SELF_QUERY)
}