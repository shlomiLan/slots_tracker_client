import ExpensesAPI from '../../../src/api/Expenses';


describe('ExpensesAPI', () => {
  // Inspect the raw component options
  it('Get expenses list', () => ExpensesAPI.get()
    .then((res) => {
      expect(res).toBeDefined();
      expect(res.data).toBeInstanceOf(Array);
    }));
});
