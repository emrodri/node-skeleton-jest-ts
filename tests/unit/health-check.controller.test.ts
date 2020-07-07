import { healthCheckController } from '../../app/controllers/health_check.controller';

describe('HealthCheck Controller', () => {
  it('should have a createTodo function', () => {
    expect(typeof healthCheckController.getHealthCheck).toBe('function');
  }); 
});
