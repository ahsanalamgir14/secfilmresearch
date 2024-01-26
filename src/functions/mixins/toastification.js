const func = function (res,app) {
    if (res.data.status > 400 && res.data.status <= 500) {
        //   let message = 'errr'
        //   for (const key in res.data.errors) {
        //     lang != 'ar' ? message += res.data.errors[key] + '\t' + "'" + key + "'" + '\n' : message += "'" + key + "'" + '\t' + res.data.errors[key] + '\n' 
        //   }
          app.$toast.error(res.data.message, {
            position: 'bottom-left',
            timeout: 5000,
            icon: true,
            hideProgressBar: true
          })
        } else {
          app.$toast.success(`${res.data.message}`, {
            position: 'bottom-right',
            timeout: 5000,
            icon: true,
            hideProgressBar: true
          })
        }
    }
    export default func
    