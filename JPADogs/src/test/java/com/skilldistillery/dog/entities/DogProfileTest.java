package com.skilldistillery.dog.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class DogProfileTest {
	private static EntityManagerFactory emf;
	private EntityManager em;
	private DogProfile dp;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("JPADogs");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		dp = em.find(DogProfile.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		dp = null;
	}

	@Test
	void initial_mapping_test() {
		assertNotNull(dp);
		assertEquals("Kovu", dp.getName());
	}

}
