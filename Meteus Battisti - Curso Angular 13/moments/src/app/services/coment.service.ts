import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Comment } from '../Comment';
import { Observable } from 'rxjs';
import { Response } from '../Response';

@Injectable({
  providedIn: 'root'
})
export class ComentService {
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}api/moments`
  constructor(private hhtp: HttpClient) {
  }

  createdComment(data: Comment): Observable<Response<Comment>> {
    const url = `${this.apiUrl}/${data.momentId}/coments`
    return this.hhtp.post<Response<Comment>>(url, data)
  }
}
