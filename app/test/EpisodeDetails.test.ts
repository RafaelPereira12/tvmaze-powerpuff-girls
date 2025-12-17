//generated with AI

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getEpisodeDetails } from '../utils/EpisodeDetailsUtils';

const mockResponse = { id: 123, name: 'Episode Name' };

describe('getEpisodeDetails', () => {
  beforeEach(() => {
    vi.resetAllMocks(); 
  });

  it('fetches episode details with correct season and number', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockResponse),
    });

    const result = await getEpisodeDetails(2, 5);

    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.tvmaze.com/shows/1955/episodebynumber?season=2&number=5'
    );
    expect(result).toEqual(mockResponse);
  });

  it('handles empty response', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue({}),
    });

    const result = await getEpisodeDetails(1, 1);
    expect(result).toEqual({});
  });
});
