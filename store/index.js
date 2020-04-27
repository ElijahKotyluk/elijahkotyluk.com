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
  async getPublicEvents ({ commit }, payload) {
    let events

    try {
      events = await octokit.activity.listPublicEventsForUser(payload)
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
  pushEvents (state) {
    const pushEvents = []

    for (const event of state.publicEvents) {
      if (event.type === 'PushEvent') {
        pushEvents.push(event)
      }
    }

    return pushEvents
  }
}
