export async function POST(request) {
  try {
    const body = await request.json()

    const visitorData = {
      timestamp: body.timestamp,
      userAgent: body.userAgent,
      device: getDeviceInfo(body.userAgent),
      url: body.url,
      referrer: body.referrer,
      ip: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip"),
    }

    // Store in browser storage (for now)
    // In production, save to database
    console.log("[v0] Visitor tracked:", visitorData)

    return Response.json({ success: true, data: visitorData })
  } catch (error) {
    console.error("[v0] Analytics error:", error)
    return Response.json({ success: false }, { status: 500 })
  }
}

function getDeviceInfo(userAgent) {
  const devices = {
    Mobile: /mobile|android|iphone|ipod/i.test(userAgent),
    Tablet: /ipad|tablet/i.test(userAgent),
    Desktop: !/mobile|android|iphone|ipod|tablet/i.test(userAgent),
  }

  return Object.keys(devices).find((key) => devices[key]) || "Unknown"
}
