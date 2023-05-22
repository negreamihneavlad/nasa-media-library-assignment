import { http } from '../../core/services/http'

export const searchImages = (
  query: string,
  yearStart: string | null,
  yearEnd: string | null,
  page: number,
) =>
  http.get('search', {
    params: {
      q: query,
      ...(yearStart && { year_start: yearStart }),
      ...(yearEnd && { year_end: yearEnd }),
      media_type: 'image',
      page,
      page_size: 20,
    },
  })

export const getAsset = (nasaId: string) =>
  http.get('search', { params: { nasa_id: nasaId } })
