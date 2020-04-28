// Imports
import { Octokit } from '@octokit/rest'

// Vars
const octokit = new Octokit({
  token: process.env.GITHUB_API_TOKEN
})

// State
export const state = () => ({
  publicEvents: []
})

// Actions
export const actions = {
  async nuxtServerInit ({ commit }) {
    let events

    try {
      events = await octokit.activity.listPublicEventsForUser({ username: 'ElijahKotyluk' })
    } catch (e) {
      console.log('[ERR]: ', e)
    }

    commit('setPublicEvents', events.data)
  }
}

// Mutations
export const mutations = {
  setPublicEvents (state, payload) {
    state.publicEvents = payload
  }
}

// Getters
export const getters = {
  // All events, props filtered
  events (state) {
    const events = []

    for (const event of state.publicEvents) {
      events.push({
        createdAt: event.created_at,
        id: event.id,
        payload: event.payload,
        repo: event.repo.name,
        type: event.type
      })
    }

    return events
  },
  // Push events only
  pushEvents (state) {
    return state.publicEvents.filter(event => event.type === 'PushEvent')
  }
}
