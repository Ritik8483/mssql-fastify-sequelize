exports.appendPayload = (request) => {
  const payload = {
    ...request.body,
    created_at:
      request.method === "POST" ? new Date() : request.body.created_at,
    updated_at: new Date(),
  };

  return payload;
};
