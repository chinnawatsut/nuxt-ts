import { ActionTree, MutationTree, GetterTree, ActionContext } from 'vuex'
import { RootState } from 'store'

export const name = 'prayuth'

export const types = {
  SELECT: 'SELECT',
  SET: 'SET',
  SELECT2: 'SELECT2'
}

export interface PersonContact {
  email: string
  phone: string
}

export interface PersonAddress {
  city: string
  country: string
  postalCode: string
  state: string
  street: string
}

export interface Person {
  id: number
  first_name: string
  last_name: string
  contact: PersonContact
  gender: string
  ip_address: string
  avatar: string
  address: PersonAddress
}

export interface State {
  selected: number
  selected2: number
  people: Person[]
}

export const namespaced = true

export const state = (): State => ({
  selected: 1,
  selected2: 1,
  people: []
})

export const getters: GetterTree<State, RootState> = {
  selectedPerson: state => {
    const p = state.people.find(person => person.id === state.selected)
    return p ? p : { first_name: 'Please,', last_name: 'select someone' }
  },
  selectedPerson2: state => {
    return state.selected2
  }
}

export interface Actions<S, R> extends ActionTree<S, R> {
  select(context: ActionContext<S, R>, id: number): void
  select2(context: ActionContext<S, R>, id: number): void
}

export const actions: Actions<State, RootState> = {
  select({ commit }, id: number) {
    commit(types.SELECT, id)
  },
  select2({ commit }, id: number) {
    console.log(id)
    commit(types.SELECT2, id)
  }
}

export const mutations: MutationTree<State> = {
  [types.SELECT](state, id: number) {
    state.selected = id
  },
  [types.SET](state, people: Person[]) {
    state.people = people
  },
  [types.SELECT2](state, id: number) {
    state.selected2 = id
  }
}
