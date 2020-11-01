import firebase from 'firebase'

export default {
    namespaced: true,
    state: {
        Productos: [
            {
                name: "Frozen Yogurt",
                calories: 159,
                stock: 10,
                precio: 1200,
            },
            {
                name: "Ice cream sandwich",
                calories: 237,
                stock: 10,
                precio: 1200,
            },
            {
                name: "Eclair",
                calories: 262,
                stock: 10,
                precio: 1200,
            },
            {
                name: "Cupcake",
                calories: 305,
                stock: 80,
                precio: 12000,
            },
            {
                name: "Gingerbread",
                calories: 356,
                stock: 40,
                precio: 10200,
            },
            {
                name: "Jelly bean",
                calories: 375,
                stock: 10,
                precio: 1200,
            },
        ]
    },
    getters: {

    },
    mutations: {

    },
    actions: {
        async getData() {
            const db = await firebase.firestore().collection("productos").get();
            db.forEach(el=>{
                // console.log(el.data());
                
            })
        }
    }
}