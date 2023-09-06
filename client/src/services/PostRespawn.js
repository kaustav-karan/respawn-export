import axios from 'axios';
import { APIURL } from '.';
import { toast } from 'react-toastify';
import { TOAST_UTILS } from '@/pages/Respawn/utils';

export default async function PostRespawn(data, url, params = {}) {
  const loadingTst = toast.loading('Registering');
  await axios
    .post(`${APIURL}${url}`, data, {
      params,
    })
    .then(() => {
      toast.update(loadingTst, {
        type: toast.TYPE.SUCCESS,
        isLoading: false,
        render: 'Registered Successfully',
        ...TOAST_UTILS,
      });
    })
    .catch((err) => {
      console.log(err);
      toast.update(loadingTst, {
        type: toast.TYPE.ERROR,
        render: 'Failed to register',
        isLoading: false,
        ...TOAST_UTILS,
      });
    });
}
