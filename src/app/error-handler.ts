import { ErrorHandler, Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class AppErrorHandler implements ErrorHandler {
  constructor(private toastr: ToastrService) {}

  showError(error: string) {
    this.toastr.error(error);
  }

  handleError(error: any): void {
    if (error instanceof HttpErrorResponse) {
      const httpError = <HttpErrorResponse>error;
      this.showError(httpError.message);
      console.log(httpError.message);
    } else {
      this.showError(error);
      console.error(error);
    }
  }
}
