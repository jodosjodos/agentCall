import base from './base'

const getAllKnowledge = () => base.get('/knowledge')

const getSpecificKnowledge = (id) => base.get(`/knowledge/${id}`)

const createNewKnowledge = (body) => base.post(`/knowledge/`, body)

const updateKnowledge = (id, body) => base.put(`/knowledge/${id}`, body)

const deleteKnowledge = (id) => base.delete(`/knowledge/${id}`)

export default {
    getAllKnowledge,
    getSpecificKnowledge,
    createNewKnowledge,
    updateKnowledge,
    deleteKnowledge
}
