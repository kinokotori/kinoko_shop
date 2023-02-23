import axios from "./ajax";

//登录
export const userLogin = (parma) => axios.post('/user/login', parma)


//获取注册验证码
export const getMsgCode = (parma) => axios.post('/user/dosendmsgcode', parma);
//验证手机号码是否被注册
export const checkPhone = (parma) => axios.post('/user/docheckphone', parma);
//验证短信验证码
export const checkCode = (parma) => axios.post('/user/docheckcode', parma);
//注册
export const finishRegister = (parma) => axios.post('/user/dofinishregister', parma);


//获取轮播图数据
export const getBannerList = () => axios.get('/banner/list')
//获取宫格布局数据
export const getNavList = () => { return [
    { navid: 1, title: '嗨购超市', imgurl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/125678/35/5947/4868/5efbf28cEbf04a25a/e2bcc411170524f0.png' },
    { navid: 2, title: '数码电器', imgurl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png!q70.jpg' },
    { navid: 3, title: '嗨购服饰', imgurl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/41867/2/15966/7116/60ec0e0dE9f50d596/758babcb4f911bf4.png!q70.jpg' },
    { navid: 4, title: '嗨购生鲜', imgurl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/177902/16/13776/5658/60ec0e71E801087f2/a0d5a68bf1461e6d.png!q70.jpg.dpg' },
    { navid: 5, title: '嗨购到家', imgurl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png!q70.jpg.dpg' },
    { navid: 6, title: '充值缴费', imgurl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/185733/21/13527/6648/60ec0f31E0fea3e0a/d86d463521140bb6.png!q70.jpg.dpg' },
    { navid: 7, title: '9.9元拼', imgurl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/36069/14/16068/6465/60ec0f67E155f9488/595ff3e606a53f02.png!q70.jpg.dpg' },
    { navid: 8, title: '领券', imgurl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/186080/16/13681/8175/60ec0fcdE032af6cf/c5acd2f8454c40e1.png!q70.jpg.dpg' },
    { navid: 9, title: '领金贴', imgurl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/196711/35/12751/6996/60ec1000E21b5bab4/38077313cb9eac4b.png!q70.jpg.dpg' },
    { navid: 10, title: 'plus会员', imgurl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/37709/6/15279/6118/60ec1046E4b5592c6/a7d6b66354efb141.png!q70.jpg.dpg' }
  ] }
//获取商品列表数据
export const getProList = (parma) => axios.get('/pro/list', parma)

//获取产品分类列表
export const getCategoryList = () => axios.get('/pro/categorylist')
//获取产品分类下的品牌列表
export const getCategoryBrandList = (parma) => axios.get('/pro/categorybrandlist', parma);
//获取某分类下某品牌的产品列表
export const getCategoryBrandProList = (parma) => axios.get('/pro/categorybrandprolist', parma);

//请求详情页面的数据
export const getDetail = (parma) => axios.get('/pro/detail/' + parma)


