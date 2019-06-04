import Axios from "./axiosInstance";
import { AxiosPromise } from "axios";

/**
 * Medico.
 */
export class Medico {
  id: number = 0;
  version: number = 0;
  nombre: string = "";
  apellido: string = "";
  fechaNacimiento: Date = new Date();
  numeroMatricula: number = 0;
  especialidad: string = "";
  constructor() { }
}

/**
 * REST interface provided for medico.
 */
export interface MedicosRestApi {
  createMedico(item: Medico): AxiosPromise<Medico>;
  updateMedico(updated: Medico): AxiosPromise<Medico>;
  getMedicos(): AxiosPromise<Medico[]>;
  getMedico(id: number): AxiosPromise<Medico>;
  getAllMedicos(): AxiosPromise<Medico[]>;
}

/**
 * REST implementation provided for medico.
 */
class Implementation implements MedicosRestApi {
  getAllMedicos(): AxiosPromise<Medico[]> {
    return Axios.axiosInstance().get<Medico[]>("/medico");
  }
  createMedico(item: Medico): AxiosPromise<Medico> {
    return Axios.axiosInstance().post<Medico>("/medico", item);
  }
  updateMedico(updated: Medico): AxiosPromise<Medico> {
    return Axios.axiosInstance().put<Medico>(`/medico`, updated);
  }
  getMedicos(): AxiosPromise<Medico[]> {
    return Axios.axiosInstance().get<Medico[]>("medico/search/all");
  }
  getMedico(id: number): AxiosPromise<Medico> {
    return Axios.axiosInstance()
      .get<Medico>(`/medico/${id}`)
      .then(result => {
        return result;
      });
  }
}

const Medicos = {
  getRestApi(): MedicosRestApi {
    const api = new Implementation();
    return api;
  }
};

export default Medicos;