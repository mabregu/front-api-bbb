var app = new Vue({
    el: '#app',
    data () {
        return {
            rooms: null,
            loading: true,
            errored: false
        }
    },
    filters: {
        currencydecimal (value) {
            return value.toFixed(2)
        }
    },
    mounted () {
        axios
            .get('http://localhost:5500/rooms')
            .then((response) => {
                if (response.status !== 200) this.errored = true;                
                this.rooms = response.data.data;                
            })
            .catch(error => {
                console.error(error)
                this.errored = true
            })
            .finally(() => this.loading = false)
    }
})