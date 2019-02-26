import { FilterPipe } from './filter.pipe';

const mockValue = [{
  title: 'test'
}, {
  title: 'title'
}]

const mockFilter = ['test']

const mockFilterCount = {
  count: 0
}

describe('FilterPipe', () => {
  let pipe
  beforeEach(() => {
    pipe = new FilterPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

   it('work with keyword', () => {
    expect(pipe.transform(mockValue, mockFilter, mockFilterCount)).toEqual([{title: 'test'}]);
    expect(mockFilterCount.count).toBe(1);
  });

  it('work without keyword', () => {
    expect(pipe.transform(mockValue, [], mockFilterCount)).toEqual(mockValue);
    expect(mockFilterCount.count).toBe(2);
  });

  it('work without value', () => {
    expect(pipe.transform([], [], mockFilterCount)).toEqual([]);
  });
});
