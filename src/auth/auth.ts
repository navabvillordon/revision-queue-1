import axios from 'axios';

export default {
    token() {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return JSON.parse(localStorage.getItem('auth._token'));
    },
}