export default function testInit(request) {
  describe('init', () => {
    it('should return ok', async () => {
      const res = await request.get('/api/init')
        .expect(200);
    });
  });
};
