import firebase from 'firebase'

export default {
    namespaced: true,
    state: {
        Productos: [

        ]
    },
    getters: {

    },
    mutations: {
        setData(state, payload) {
            state.Productos.push(payload)
            // console.log(state.Productos);
        },
        AddData(state, payload) {
            state.Productos.push(payload)
            console.log(state.Productos);
        }

    },
    actions: {
        async getData({ commit }) {
            const db = await firebase.firestore().collection("productos").get();
            db.forEach(el => {
                // console.log(el.data());
                const producto = {
                    id: el.id,
                    nombre: el.data().nombre,
                    codigo: el.data().codigo,
                    stock: el.data().stock,
                    precio: el.data().precio,
                }
                commit("setData", producto)
            })
        },
        async addData({ commit }, payload) {
            const precio = Number(payload.precio)
            const stock = Number(payload.stock)
            const nombre = payload.nombre.toLowerCase();
            const codigo = payload.codigo.toUpperCase();
            // console.log(payload);

            const juguete = {
                precio,
                stock,
                nombre,
                codigo
            }
            // en firebase
            try {
                await firebase.firestore().collection('productos').add(juguete)

            } catch (error) {
                console.log('Error en la carga de juguete:', error);
            }


            //en Store
            commit("AddData", juguete)
        }
    }
}


