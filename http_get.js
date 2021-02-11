import { sleep } from 'k6';
import { Counter, Rate } from 'k6/metrics';
import http from 'k6/http';

let myErrorCounter = new Counter('my_error_counter');
let myErrorRate = new Rate('my_error_rate');

export default function () {
  const res = http.get(`http://localhost:8002/${Math.floor(Math.random() * 10000000)}`);
  sleep(1);
  if (res.status === 404) {
    myErrorCounter.add(1);
    myErrorRate.add(1);
  }
}
