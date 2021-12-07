import * as service from '../services/helloService'

export function helloWorld(req, res) {
    res.status(200).send(service.getMessage());
}