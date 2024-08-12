export {default} from 'next-auth/middleware'    //without matchers, this line protects the whole site

export const config = {matcher : ["/ordersDashboard", "/cart"]}