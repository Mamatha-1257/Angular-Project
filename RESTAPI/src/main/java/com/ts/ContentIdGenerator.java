package com.ts;

import java.util.UUID;

public class ContentIdGenerator {
	String generateContentId(String prefix) {
	     return String.format("%s-%s", prefix, UUID.randomUUID());
	}

	public static String getContentId(String prefix) {
		// TODO Auto-generated method stub
		return String.format("%s-%s", prefix, UUID.randomUUID());
	}
}
