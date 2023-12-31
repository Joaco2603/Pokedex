import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';

import { HttpAdapter } from '../interfaces/http-adapter.interface';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class AxiosAdapter implements HttpAdapter {
  private readonly axios: AxiosInstance = axios;

  async get<T>(url: string): Promise<T> {
    try {
      const { data } = await this.axios.get<T>(url);
      return data;
    } catch (err) {
      throw new Error(`This is an error`);
    }
  }
}
