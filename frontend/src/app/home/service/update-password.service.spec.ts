import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UpdatePasswordService } from './update-password.service';

describe('LoginService', () => {
  let service: UpdatePasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UpdatePasswordService]
    });
    service = TestBed.inject(UpdatePasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});