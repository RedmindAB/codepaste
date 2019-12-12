/**
 * Calculates distance between two coordinates
 * @returns {number} distance Meters between coordinates
 */
export function calculateMeterDistanceBetweenCoordinates(
  { latitude: lat1, longitude: lon1 },
  { latitude: lat2, longitude: lon2 }
): number {
  const R = 6371
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLon = ((lon2 - lon1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const d = R * c

  return Math.round(d * 1000)
}

export function getWalkingETAMinutes(
  distanceInMeters: number,
  walkingSpeedKMPerHour = 5
) {
  return Math.ceil(60 * (distanceInMeters / (walkingSpeedKMPerHour * 1000)))
}

export function getUserLocation(): Promise<{ coords: any }> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      success => resolve(success),
      error => reject(error)
    )
  })
}
